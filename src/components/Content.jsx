import Button from "./Button"

const Content = () => {
  return (
    <main className="component-showcase">
        <section className="component-group">
          <h2>Variants</h2>
          <div className="component-card">
            <Button variant="primary" children="primary"/>
            <Button variant="secondary" children="secondary"/>
            <Button variant="danger" children="danger"/>
            <Button variant="gradient" children="gradient"/>
            <Button variant="outline" children="outline"/>
          </div>
        </section>

        <section className="component-group">
          <h2>Sizes</h2>
          <div className="component-card">
            <Button size="small" variant="primary" children="small"/>
            <Button size="medium" variant="primary" children="medium"/>
            <Button size="large" variant="primary" children="large"/>
          </div>
        </section>

        <section className="component-group">
          <h2>Button States</h2>
          <div className="component-card">
            <Button variant="primary" children="default"/>
            <Button variant="primary" isDisabled={true} children="disabled"/>
          </div>
        </section>

        <section className="component-group">
          <h2>Full Width Button</h2>
          <div className="component-card">
            <Button variant="secondary" fullWidth={true} children="full width"/>
          </div>
        </section>
      </main>
  )
}

export default Content