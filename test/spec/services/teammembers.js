'use strict';

describe('Service: TeamMembers', function () {

  // load the service's module
  beforeEach(module('seedApp'));

  // instantiate service
  var TeamMembers;
  beforeEach(inject(function (_TeamMembers_) {
    TeamMembers = _TeamMembers_;
  }));

  it('should do something', function () {
    expect(!!TeamMembers).toBe(true);
  });

});
