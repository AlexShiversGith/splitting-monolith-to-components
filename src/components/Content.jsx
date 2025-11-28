import Button from "./Button"
import Section from "./Section"

const Content = () => {
  return (
    <main className="component-showcase">
        <Section title='Variants' children>
          <Button variant="primary" children="primary"/>
          <Button variant="secondary" children="secondary"/>
          <Button variant="danger" children="danger"/>
          <Button variant="gradient" children="gradient"/>
          <Button variant="outline" children="outline"/>
        </Section>
        <Section title="Sizes" children>
          <Button size="small" variant="primary" children="small"/>
            <Button size="medium" variant="primary" children="medium"/>
            <Button size="large" variant="primary" children="large"/>
        </Section>
        <Section title="Button States" children>
          <Button variant="primary" children="default"/>
          <Button variant="primary" isDisabled={true} children="disabled"/>
        </Section>
        <Section title="Full Width Button" children>
            <Button variant="secondary" fullWidth={true} children="full width"/>
        </Section>
      </main>
  )
}

export default Content