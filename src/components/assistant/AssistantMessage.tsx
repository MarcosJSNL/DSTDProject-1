import { Link } from 'react-router-dom'
import { getWhatsAppUrl, defaultPhone } from '../../utils/whatsapp'
import { ExternalLink } from 'lucide-react'
import type { ChatMessage } from '../../data/assistantKnowledge'

interface Props {
  message: ChatMessage
}

export default function AssistantMessage({ message }: Props) {
  const isAssistant = message.sender === 'assistant'

  return (
    <div className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[85%] ${isAssistant ? '' : 'max-w-[75%]'}`}>
        <div
          className={[
            'rounded-2xl px-4 py-3 text-sm leading-relaxed',
            isAssistant
              ? 'bg-white/80 text-navy border border-navy/5'
              : 'bg-champagne text-navy-deep font-medium',
          ].join(' ')}
        >
          {message.text}
        </div>

        {message.actions && message.actions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {message.actions.map((action, i) =>
              action.type === 'link' && action.href ? (
                <Link
                  key={i}
                  to={action.href}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-navy-deep/5 border border-navy/8 px-3 py-1.5 text-xs font-medium text-navy transition-colors duration-200 hover:bg-navy-deep hover:text-white"
                >
                  {action.label}
                  <ExternalLink size={12} />
                </Link>
              ) : action.type === 'whatsapp' && action.message ? (
                <a
                  key={i}
                  href={getWhatsAppUrl({ phone: defaultPhone, message: action.message })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 px-3 py-1.5 text-xs font-medium text-[#1a9c4c] transition-colors duration-200 hover:bg-[#25D366] hover:text-white"
                >
                  {action.label}
                </a>
              ) : null
            )}
          </div>
        )}
      </div>
    </div>
  )
}
