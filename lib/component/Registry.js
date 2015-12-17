import {
  Map,
} from 'immutable';

var modules = Map();

var _activeContext = null;

const Registry = {
  addContext: function(context) {
    modules = modules.set(context.getName(), context);
    _activeContext = context;
  },

  getActiveContext: function() {
    return _activeContext;
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
