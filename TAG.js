function rename(nodes){
    let names = nodes.names;
    names = $.replace(names, /越南家宽/, 越南河内家宽);
    return names;
    names = $.trim(names);
}
