import {Component, EventEmitter, Event, Prop} from '@stencil/core'

@Component({
  tag: 'solar-planet'
})
export class SolarPlanet {
  @Prop() name: string
  @Event({eventName: 'planet-loaded'}) loaded: EventEmitter<string>
  @Event() bubbler: EventEmitter<UIEvent>

  componentDidLoad() {
    this.loaded.emit(`planet ${this.name} did load`)
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
