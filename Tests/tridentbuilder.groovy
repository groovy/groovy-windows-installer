import groovy.swing.SwingBuilder
import griffon.builder.trident.*
import griffon.builder.gfx.*
import griffon.builder.gfx.swing.*
import groovy.beans.Bindable
import org.pushingpixels.trident.Timeline.TimelineState
 
@Bindable
class Model {
  float s = 0.5f
  float ra = 0.0f
}
def model = new Model()
 
def trident = new TridentBuilder()
def anim = trident.timeline(model, duration: 3000, loop: 'reverse') {
  interpolatedProperty(property: "s", from: 0.5f, to: 2.0f)
  interpolatedProperty(property: "ra", from: 0f, to: 359f)
}
 
def cx = 200
def cy = 200
def radius = 50
 
def gfx = new GfxBuilder()
def node = gfx.group(bc: 'none') {
  antialias true
  background(color: color("black"))
  group(id: "g1", sx: bind{model.s}, sy: bind{model.s}, ra: bind{model.ra},
    mouseClicked: {anim.state == TimelineState.SUSPENDED? anim.resume() : anim.suspend()}) {
    rect(x: cx-radius, y: cy-radius, w: radius*2, h: radius*2, f: color('blue'))
    circle(cx: cx-radius, cy: cy-radius, r: radius/2, f: color('red'))
    circle(cx: cx-radius, cy: cy+radius, r: radius/2, f: color('green'))
    circle(cx: cx+radius, cy: cy-radius, r: radius/2, f: color('yellow'))
    circle(cx: cx+radius, cy: cy+radius, r: radius/2, f: color('violet'))
  }
  rawNode { g, component, bounds ->
    g.color = color('cyan')
    g.draw(g1.shape)
    g.color = color('yellow')
    g.draw(g1.shape.bounds)
    g.color = color('white')
    g.draw(g1.runtime.boundingShape)
    g.color = color('red')
    g.draw(g1.runtime.boundingShape.bounds)
  }
}
 
def swing = new SwingBuilder()
swing.edt {
  frame(title: "GFX + Trident 2", size: [410,430], visible: true) {
    widget(new GfxCanvas(), id: "canvas", node: node)
  }
}
trident.swingRepaintTimeline(swing.canvas, loop: true)