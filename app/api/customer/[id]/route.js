import Customer from "@models/customer";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const customer = await Customer.findById(params.id).populate("creator")
        if (!customer) return new Response("customer Not Found", { status: 404 });

        return new Response(JSON.stringify(customer), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { customer } = await request.json();

    try {
        await connectToDB();

        // Find the existing customer by ID
        const existingCustomer = await Customer.findById(params.id);

        if (!existingCustomer) {
            return new Response("Customer not found", { status: 404 });
        }

        // Update the customer with new data
        existingCustomer.customer = customer;

        await existingCustomer.save();

        return new Response("Successfully updated the Customers", { status: 200 });
    } catch (error) {
        return new Response("Error Updating Customers", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the customer by ID and remove it
        await Customer.findByIdAndRemove(params.id);

        return new Response("Customer deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting Customer", { status: 500 });
    }
};
