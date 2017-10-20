import {Component, Listen, Prop} from '@stencil/core'


@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName {
  @Prop() first: string
  @Prop() last: string

  @Listen('planet-loaded')
  onPlanetLoaded(event: CustomEvent) {
    console.log(`onPlanetLoaded :: ${event.detail}`)
  }

  @Listen('bubbler')
  onBubbler(event: CustomEvent) {
    console.log(`onBubbler :: ${event.detail}`)
  }

  render() {
    return (
      <div>
        Hello, my name is {this.first} {this.last}
        <solar-planet name="Earth"></solar-planet>
      </div>
    )
  }
}
