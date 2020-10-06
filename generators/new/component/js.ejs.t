---
to: "src/components/<%=componentType%>/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.js"
---
<%
let className = h.changeCase.pascal(name)
%>
export const <%=className%> = {
  props:{}
}
export default <%=className%>;
