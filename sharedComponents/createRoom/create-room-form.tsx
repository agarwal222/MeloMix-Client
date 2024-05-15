import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

type CreateRoomFormProps = {
  onClose: () => void
}

enum RoomType {
  public = "public",
  private = "private",
}

export default function CreateRoomForm({ onClose }: CreateRoomFormProps) {
  const schema = z.object({
    name: z.string().min(3, { message: "Name is too short" }),
    description: z.string().optional(),
    type: z.nativeEnum(RoomType),
  })

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      type: RoomType.public,
    },
  })

  const onSubmit = async (data: z.infer<typeof schema>) => {
    console.log(data)
  }
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 px-4 pb-2 sm:px-0 sm:pb-0"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-row gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-1 grow">
                <FormControl>
                  <Input
                    className="bg-input"
                    placeholder="Room Name"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm " />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="min-w-36">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger className="bg-input flex-1">
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                    <SelectContent className="bg-input">
                      <SelectItem value={RoomType.public}>Public</SelectItem>
                      <SelectItem value={RoomType.private}>Private</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="bg-input resize-none"
                  placeholder="Description"
                  rows={3}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col sm:flex-row justify-start gap-4 mt-4">
          <Button className="px-9" type="submit">
            Create Room
          </Button>
          <Button
            variant="link"
            onClick={(e) => {
              e.preventDefault()
              form.reset()
              onClose()
            }}
          >
            <span className="text-text-secondary underline">Cancel</span>
          </Button>
        </div>
      </form>
    </Form>
  )
}
