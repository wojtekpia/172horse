widgets.agent = {
    template: "\
<div class=\"next_steps_separator\"></div>\
<div class=\"agent_details\">\
<div class=\"agent_label\">Presented by:</div> <div class=\"agent_name\"><%= agent.name.full %></div>\
<div class=\"agent_img\"><img src=\"<%= agent.photo.href %>\"/></div>\
    <div class=\"agent_info\">\
        <div class=\"agent_slogan\"><%= agent.slogan %></div>\
        <% for(var j = 0; j < agent.phone.length; j++){ %>\
            <div class=\"agent_label\"><%= agent.phone[j].type %>:</div>\
            <div class=\"agent_phone\"><%= agent.phone[j].number %></div>\
        <% } %>\
        <a href=\"<%= agent.href %>\">More about <%= agent.name.first %></a>\
    </div>\
</div>\
<div class=\"next_steps_separator\"></div>\
<div class=\"agent_details\">\
<div class=\"agent_name\"><%= colist_agent.name.full %></div>\
<div class=\"agent_img\"><img src=\"<%= colist_agent.photo.href %>\"/></div>\
    <div class=\"agent_info\">\
        <div class=\"agent_slogan\"><%= colist_agent.slogan %></div>\
        <% for(var j = 0; j < colist_agent.phone.length; j++){ %>\
            <div class=\"agent_label\"><%= colist_agent.phone[j].type %>:</div>\
            <div class=\"agent_phone\"><%= colist_agent.phone[j].number %></div>\
        <% } %>\
        <a href=\"<%= colist_agent.href %>\">More about <%= colist_agent.name.first %></a>\
    </div>\
</div>\
<div class=\"next_steps_separator\"></div>\
<div>\
    <div class=\"agent_img\"><img width='90px' src=\"<%= agent.office.photo.href %>\"/></div>\
    <div class=\"agent_info\">\
        <div class=\"agent_slogan\"><%= agent.office.slogan %></div>\
    </div>\
</div>\
",

    render: function (selector, agent, colist_agent) {
        var template = _.template(this.template);
        var html = template({ 'agent': agent, 'colist_agent': colist_agent });
        $(selector).html(html);
    }
};
