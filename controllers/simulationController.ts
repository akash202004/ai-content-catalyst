import { db } from "@/db/index";
import { Simulation, User } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

// Validation schema
const simulationSchema = z.object({
  createdBy: z.string().uuid(),
  platform: z.string().min(1),
  description: z.string().min(1),
  tags: z.string().min(1),
  picture: z.string().optional(),
  likes: z.number().default(0),
  comments: z.number().default(0),
  shares: z.number().default(0),
  saves: z.number().default(0),
  report: z.string(),
});

// Create simulation
export const createSimulation = async (req: Request) => {
  try {
    const body = await req.json();
    const data = simulationSchema.parse(body);

    const result = await db.insert(Simulation).values(data).returning();

    return new Response(JSON.stringify(result[0]), {
      status: 201,
    });
  } catch (error) {
    console.error("Create Simulation Error:", error);
    return new Response(
      JSON.stringify({ message: "Invalid input or server error." }),
      { status: 400 }
    );
  }
};

// Get all simulations
export const getAllSimulations = async () => {
  try {
    const result = await db.select().from(Simulation);
    return new Response(JSON.stringify(result), {
      status: 200,
    });
  } catch (error) {
    console.error("Fetch Simulations Error:", error);
    return new Response(JSON.stringify({ message: "Failed to fetch data." }), {
      status: 500,
    });
  }
};

// Get simulation by ID
export const getSimulationById = async (id: string) => {
  try {
    const userId = id;
    const exists = await db.select().from(User).where(eq(User.id, userId));
    if (!exists) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    const result = await db
      .select()
      .from(Simulation)
      .where(eq(Simulation.createdBy, id));

    if (result.length === 0) {
      return new Response(JSON.stringify({ message: "Not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(result[0]), {
      status: 200,
    });
  } catch (error) {
    console.error("Get Simulation By ID Error:", error);
    return new Response(JSON.stringify({ message: "Error fetching data" }), {
      status: 500,
    });
  }
};

// Update simulation
export const updateSimulation = async (req: Request, id: string) => {
  try {
    const body = await req.json();
    const data = simulationSchema.partial().parse(body);

    const result = await db
      .update(Simulation)
      .set(data)
      .where(eq(Simulation.id, id))
      .returning();

    if (result.length === 0) {
      return new Response(JSON.stringify({ message: "Not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(result[0]), {
      status: 200,
    });
  } catch (error) {
    console.error("Update Simulation Error:", error);
    return new Response(JSON.stringify({ message: "Update failed" }), {
      status: 400,
    });
  }
};

// Delete simulation
export const deleteSimulation = async (id: string) => {
  try {
    const result = await db
      .delete(Simulation)
      .where(eq(Simulation.id, id))
      .returning();

    if (result.length === 0) {
      return new Response(JSON.stringify({ message: "Not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ message: "Deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Delete Simulation Error:", error);
    return new Response(JSON.stringify({ message: "Deletion failed" }), {
      status: 500,
    });
  }
};

// Get simulation count by user for credit tracking
export const getSimulationCountByUser = async (userId: string) => {
  try {
    const result = await db
      .select()
      .from(Simulation)
      .where(eq(Simulation.createdBy, userId));

    return result.length;
  } catch (error) {
    console.error("Get Simulation Count Error:", error);
    throw error;
  }
};

// Create simulation with credit check
export const createSimulationWithCreditCheck = async (data: {
  createdBy: string;
  platform: string;
  description: string;
  tags: string;
  picture?: string;
  likes?: number;
  comments?: number;
  shares?: number;
  saves?: number;
  report: string;
}) => {
  try {
    // Import subscription controller dynamically to avoid circular imports
    const { canUserPerformAction } = await import("./subscriptionController");

    // Check if user can perform simulation action based on their plan
    const permissionCheck = await canUserPerformAction(
      data.createdBy,
      "simulation"
    );

    if (!permissionCheck.allowed) {
      throw new Error(permissionCheck.reason || "CREDIT_LIMIT_EXCEEDED");
    }

    const result = await db.insert(Simulation).values(data).returning();
    return result[0];
  } catch (error) {
    console.error("Create Simulation with Credit Check Error:", error);
    throw error;
  }
};
