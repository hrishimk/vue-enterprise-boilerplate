---
to: "src/components/<%=componentType%>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.vue"
---
<%let fileName = h.changeCase.pascal(name) %>

<script src="./<%= fileName %>.js"></script>

<template src="./<%= fileName %>.html"></template>

<style src="./<%= fileName %>.scss" scoped lang="scss"></style>
