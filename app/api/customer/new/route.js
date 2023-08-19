import Customer from "@models/customer";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, firstname, lastname, email } = await request.json();

    try {
        await connectToDB();
        const newCustomer = new Customer({ creator: userId, firstname, lastname, email });

        await newCustomer.save();
        return new Response(JSON.stringify(newCustomer), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new customer", { status: 500 });
    }
}
