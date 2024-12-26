"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  speaker: string
  avatar: string
  content: string
  isAgent: boolean
}

interface TranscriptViewProps {
  messages: Message[]
  audioUrl: string
}

export function TranscriptView({ messages }: TranscriptViewProps) {
  return (
    <ScrollArea className="h-[calc(100%-4rem)] w-full rounded-md">
      <div className="flex flex-col gap-6 p-6">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 ${
              message.isAgent ? 'bg-[#F8F0FF]' : 'bg-[#FDF7F3]'
            } rounded-2xl p-6`}
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
                <AvatarFallback className="bg-gray-100">
                  {message.avatar}
                </AvatarFallback>
              </Avatar>
              <span className="font-medium text-base">
                {message.speaker}
              </span>
            </div>
            <p className="text-base leading-relaxed text-gray-700 pl-11">
              {message.content}
            </p>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}

