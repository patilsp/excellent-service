import Link from "next/link";

import { Icons } from "@/components/icons"
import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/new-york/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"



const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-center flex-col mb-5'>
      <h1 className='head_text text-center'>
        <span className='fs-36 green_gradient'>{type} Customer</span>
      </h1>
      
      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >

  <Card>
      <CardHeader>
        <CardTitle>Add New Customer</CardTitle>
        <CardDescription>
          Add a new Customer details.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
      
          <div className="grid gap-2">
            <Label htmlFor="name">First Name</Label>
            <Input id="firstname" placeholder="First Name" value={post.firstname}
              onChange={(e) => setPost({ ...post, firstname: e.target.value })} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Last Name</Label>
            <Input id="lastname" placeholder="Last Name" value={post.lastname}
              onChange={(e) => setPost({ ...post, lastname: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email </Label>
            <Input id="email" placeholder="Email" value={post.email}
              onChange={(e) => setPost({ ...post, email: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Date Of Birth </Label>
            <Input id="dateofbirth" placeholder="Date Of Birth" value={post.dateofbirth}
              onChange={(e) => setPost({ ...post, dateofbirth: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Address </Label>
            <textarea
              value={post.address}
              onChange={(e) => setPost({ ...post, address: e.target.value })}
              placeholder='Write your address here'
              required
              className='form_textarea border'
            />
          
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phoneno">Phone Number</Label>
            <Input id="phoneno" placeholder="Phone Number" value={post.phoneno}
              onChange={(e) => setPost({ ...post, phoneno: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="city" value={post.city}
              onChange={(e) => setPost({ ...post, city: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="state">State</Label>
            <Input id="state" placeholder="state" value={post.state}
              onChange={(e) => setPost({ ...post, state: e.target.value })}/>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pincode">Pin Code</Label>
            <Input id="pincode" placeholder="Pin Code" value={post.pincode}
              onChange={(e) => setPost({ ...post, pincode: e.target.value })}/>
          </div>

          
      
      <Label htmlFor="tag"><span className='font-satoshi font-semibold text-base text-gray-700'>
            Customer Tag{" "}
            <span className='font-normal'>
              (#active, #inactive, etc.)
            </span>
          </span></Label>
          
          <Input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type='text'
            placeholder='#Tag'
            required
            className='form_input border'
          />
 
  
      </CardContent>


        
      <CardFooter className="flex flex-end">
        {/* <Button className="w-full">Continue</Button> */}
        <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

        <Button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary rounded-ful ml-2'
          >
            {submitting ? `${type}ing...` : type}
          </Button>
      </CardFooter>
    </Card>
      </form>
    </section>
  );
};

export default Form;
