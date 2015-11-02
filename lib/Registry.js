import {
  Map,
} from 'immutable';

var modules = Map();

const Registry = {
  addContext: function(context) {
    modules = modules.set(context.getName(), context);
  },

  getActiveContext: function() {
    return modules.last();
  },

  getContextNames: function() {
    return modules.map((module) =>
      module.getName()
    );
  },

  getContextByName: function(name) {
    return modules.get(name);
  },

};

export default Registry;
