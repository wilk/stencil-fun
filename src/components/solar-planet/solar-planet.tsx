import {Component, EventEmitter, Event, Prop} from '@stencil/core'
import {ActiveRouter} from "@stencil/router"

@Component({
  tag: 'solar-planet'
})
export class SolarPlanet {
  @Prop() name: string
  @Event({eventName: 'planet-loaded'}) loaded: EventEmitter<string>
  @Event() bubbler: EventEmitter<UIEvent>
  @Prop({ context: 'activeRouter' }) activeRouter: ActiveRouter

  componentDidLoad() {
    this.loaded.emit(`planet ${this.name} did load`)
    console.log(this.activeRouter)
  }

  onClick(evt: UIEvent) {
    console.log('solar-planet::onClick')

    this.bubbler.emit(evt)
  }

  render() {
    return (
      <div>
        <div>This is {this.name} planet.</div>
        <button onClick={this.onClick.bind(this)}>Say my name</button>
      </div>
    )
  }
}
