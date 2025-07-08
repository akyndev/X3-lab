"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Textarea } from "./ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name has to be atleast 3 chars"
  }),
  email: z.string().email({
    message: "Please Provide an email"
  }),
  message: z.string().min(10, {
    message: "Message too short"
  }),
  interest: z.enum(["Mentor", "Partner", "Donate", "Others"])
})

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  })

  const {
    formState: { isLoading, isSubmitting, isValidating, isSubmitted }
  } = form

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await fetch("/api/send/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // or whatever your content type is
      },
      body: JSON.stringify(values)
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WHAT ARE YOU INTERESTED IN?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-3 py-4"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Mentor" />
                    </FormControl>
                    <FormLabel className="font-normal">Become a mentor</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Partner" />
                    </FormControl>
                    <FormLabel className="font-normal">I want to be a partner with X3Lab</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Donate" />
                    </FormControl>
                    <FormLabel className="font-normal">I want to donate to X3Lab</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Others" />
                    </FormControl>
                    <FormLabel className="font-normal">Others</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Write us a message</FormLabel>
              <FormControl>
                <Textarea placeholder="I'm ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={isLoading || isSubmitting || isValidating}
          className="w-[203px] py-6 disabled:bg-black relative flex"
          type="submit"
        >
          {!isSubmitting && !isSubmitted ? (
            "Submit"
          ) : isSubmitting && !isSubmitted ? (
            <Loader2 className="animate-spin" />
          ) : !isSubmitting && isSubmitted ? (
            "Submitted"
          ) : null}
        </Button>
      </form>
    </Form>
  )
}
