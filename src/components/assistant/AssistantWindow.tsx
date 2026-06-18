import { useRef, useEffect, useState } from 'react'
import { Send } from 'lucide-react'
import AssistantMessage from './AssistantMessage'
import QuickQuestions from './QuickQuestions'
import type { ChatMessage } from '../../data/assistantKnowledge'

interface Props {
  messages: ChatMessage[]
  onSend: (text: string) => void
  onQuickQuestion: (question: string) => void
}

export default function AssistantWindow({ messages, onSend, onQuickQuestion }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [input, setInput] = useState('')

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    onSend(input.trim())
    setInput('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e as unknown as React.FormEvent)
    }
  }

  const showQuickQuestions = messages.length <= 2

  return (
    <div
      className={[
        'flex flex-col',
        'w-[90vw] sm:w-[400px] max-h-[70vh] sm:max-h-[520px]',
        'rounded-3xl overflow-hidden',
        'bg-white/90 backdrop-blur-xl',
        'border border-white/40 shadow-premium-lg',
        'transition-all duration-300',
      ].join(' ')}
    >
      {/* Header */}
      <div className="shrink-0 bg-navy-deep px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-champagne/20">
            <span className="text-sm">D</span>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white leading-none">Asistente DSTD</h3>
            <p className="mt-0.5 text-[11px] text-white/60">Estoy aquí para ayudarte</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-ivory/30">
        {messages.map((msg) => (
          <AssistantMessage key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick Questions */}
      {showQuickQuestions && (
        <div className="shrink-0 border-t border-navy/5 px-4 py-3 bg-white/60">
          <p className="mb-2 text-[11px] uppercase tracking-wider text-navy/40 font-medium">Preguntas rápidas</p>
          <QuickQuestions onSelect={onQuickQuestion} />
        </div>
      )}

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="shrink-0 flex items-center gap-2 border-t border-navy/5 px-4 py-3 bg-white/80"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe tu pregunta..."
          className="flex-1 rounded-xl bg-ivory border border-navy/8 px-4 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-champagne/30 transition-all"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-deep text-white transition-all duration-200 hover:bg-champagne disabled:opacity-30 disabled:hover:bg-navy-deep"
        >
          <Send size={16} strokeWidth={2} />
        </button>
      </form>
    </div>
  )
}
