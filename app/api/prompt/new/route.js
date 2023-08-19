import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, firstname, lastname, email, address, city, state, pincode, phoneno, dateofbirth, tag } = await request.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({ creator: userId, firstname, lastname, email,address, city, state, pincode, phoneno, dateofbirth, tag });

        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new customer", { status: 500 });
    }
}
