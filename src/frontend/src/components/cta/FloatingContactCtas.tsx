import { Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function FloatingContactCtas() {
  const phoneNumber = '+91XXXXXXXXXX'; // Placeholder
  const whatsappMessage = encodeURIComponent('Hello! I would like to inquire about products at IN2 Supermart.');

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        {/* WhatsApp Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white"
              asChild
            >
              <a
                href={`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact us on WhatsApp"
              >
                <MessageCircle className="h-6 w-6" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>

        {/* Call Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="h-14 w-14 rounded-full shadow-lg bg-secondary hover:bg-secondary/90"
              asChild
            >
              <a href={`tel:${phoneNumber}`} aria-label="Call us">
                <Phone className="h-6 w-6" />
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Call us now</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}

