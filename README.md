# Angular Task
Start the Angular app with:
```
npm start
```
`CountdownComponent` is a presentational component which counts down from a provided number of seconds (input `timeLeft`).
Branch `days-hh-mm-ss` is a similar solution for the `CountdownComponent` component, which nicely formats a remaining time.
# Branch `days-hh-mm-ss`
This branch contains a slight improvement if a countdown component by including a formatted remaining time, for example:
```plain
Seconds left to deadline: 2:00:01:10
```
means that there 2 days, 1 minute and 10 seconds remaining to a deadline.