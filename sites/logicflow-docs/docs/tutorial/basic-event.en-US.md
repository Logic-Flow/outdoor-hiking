---
nav: Guide
group:
  title: Basics
  order: 1
title: Event
order: 6
---

# Events

Events are triggered when we interact with the canvas using the mouse or other means. By listening to these events, we can get the data generated when they are triggered, and then use this data to realize the required functions. See [event API](/en-US/api/event-center-api) for details on listening to events.

## Listening to events

The `on` method is provided on the `lf` instance to support listening to events.

```jsx | pure
lf.on("node:dnd-add", (data) => {});
```

LogicFlow supports splitting event names with commas.

```jsx | pure
lf.on("node:click,edge:click", (data) => {});
```

## Customizing events

In addition to the listening events supported on lf, events can be listened to and triggered using the [eventCenter](/en-US/api/graph-model-api#eventcenter) object. `eventCenter` is a property on a `graphModel`. So when customizing a node, we can use `eventCenter` to trigger custom events.

```jsx | pure
class ButtonNode extends HtmlNode {
  setHtml(rootEl) {
    const { properties } = this.props.model;

    const el = document.createElement("div");
    el.className = "uml-wrapper";
    const html = `
      <div>
        <div class="uml-head">Head</div>
        <div class="uml-body">
          <div><button onclick="setData()">+</button> ${properties.name}</div>
          <div>${properties.body}</div>
        </div>
        <div class="uml-footer">
          <div>setHead(Head $head)</div>
          <div>setBody(Body $body)</div>
        </div>
      </div>
    `;
    el.innerHTML = html;
    rootEl.innerHTML = "";
    rootEl.appendChild(el);
    window.setData = () => {
      const { graphModel, model } = this.props;
      graphModel.eventCenter.emit("custom:button-click", model);
    };
  }
}
```

## example

<a href="https://codesandbox.io/embed/logicflow-step7-dpmgb?fontsize=14&hidenavigation=1&theme=dark&view=preview" target="_blank">Go to CodeSandbox for examples</a>
