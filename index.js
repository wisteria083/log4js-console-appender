"use strict";

let function_name = null;

function esAppender(layout, timezoneOffset) {
  return (loggingEvent) => {
    // process.stdout.write(function_name + ` ${layout(loggingEvent, timezoneOffset)}\n`);
    console.log(function_name + ` ${layout(loggingEvent, timezoneOffset)}`);
  };
}

function configure(config, layouts) {

  let layout = layouts.colouredLayout;

  function_name = config.function_name;
  
  if(!function_name){
    throw new Error("function_name is invalid");
  }

  if (config.layout) {
    layout = layouts.layout(config.layout.type, config.layout);
  }

  return esAppender(layout, config.timezoneOffset);

}

exports.configure = configure;