---
title: "3 Common Mistakes that Impede React Reconciliation and Updating Processes"
description: "To optimize React's performance and avoid unnecessary re-renders, developers should avoid common mistakes such as using object literals in props, passing anonymous functions, and overusing or spreading unnecessary props."
pubDate: 2019-04-11
tags: ["react", "performance", "best-practices"]
externalUrl: "https://medium.com/strands-tech-corner/3-common-mistakes-that-impede-react-reconciliation-and-updating-processes-8b917ebde61e"
---

To optimize React's performance and avoid unnecessary re-renders, developers should avoid common mistakes such as using object literals in props, passing anonymous functions, and overusing or spreading unnecessary props.

Each of these practices creates new objects or closures in memory, leading to frequent and unnecessary re-rendering.

## Mistake 1: Using Object Literals in Props

When you pass an object literal directly as a prop, React creates a new object reference on every render. This causes the child component to re-render even when the actual data hasn't changed.

## Mistake 2: Passing Anonymous Functions

Similar to object literals, anonymous functions create new references on every render cycle, triggering unnecessary re-renders in child components.

## Mistake 3: Overusing or Spreading Unnecessary Props

Spreading all props or passing unnecessary props to components increases the surface area for potential re-renders and makes the code harder to maintain.

Read the full article on [Medium](https://medium.com/strands-tech-corner/3-common-mistakes-that-impede-react-reconciliation-and-updating-processes-8b917ebde61e).
