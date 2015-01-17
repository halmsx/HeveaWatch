/**
 * Implements hook_menu().
 */
function my_module_menu() {
  try {
    var items = {};
    items['hello_world'] = {
      title: 'Hello DrupalGap',
      page_callback: 'my_module_hello_world_page'
    };
    return items;
  }
  catch (error) { console.log('my_module_menu - ' + error); }
}

function my_module_hello_world_page() {
  try {
    var content = {};
    content['my_intro_text'] = {
      markup: '<p>Hello App World!</p>'
    };
    return content;
  }
  catch (error) { console.log('my_module_hello_world_page - ' + error); }
}
