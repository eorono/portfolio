import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="Intel NUC7i5BNH i5 &th Gen 32GB DDR4 ">
            It is quite powerful and functional for each task or project that arises and has to be developed,
            it has an NVM of 1TB that improves its performance  .
          </Tool>
          <Tool title="Acer laptop i5 11th Gen 32gb DDR4(Standard Glass)">
            Very powerful and usefull when i have to be away from my desk.
          </Tool>
          <Tool title="Raspberry Pi 4 4GB Ram">
            I used as a server for media stream in a internal network and also as a retro console.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Visual Studio Code">
            Imagine VS Code as your coding Swiss Army Knife. It's a super-flexible
            code editor that works on pretty much any computer (Windows, Mac, or Linux)
            , and it won't weigh down your system like some bulky software.
          </Tool>
          <Tool title="IntelliJ Package">
            One of the tools that I use the most and in which I feel most comfortable,
            an Ide with everything necessary for any type of work.
          </Tool>
          <Tool title="TablePlus">
            Great software for working with databases. Has saved me from
            building about a thousand admin interfaces for my various projects
            over the years.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
