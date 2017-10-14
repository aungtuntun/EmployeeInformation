export default function() {
this.namespace= '/api';
let employees = [{
  type: 'employees',
  id: '000001',
  attributes: {
    name: 'Aung Tun Tun',
    title: 'Mobile Developer',
    owner: 'Self Service',
    position: 'Team Lead',
    department: 'Solution Delivery Department',
    city: 'Yangon',
    salary: '$5500'
  }
}, 
{
  type: 'employees',
  id: '000002',
  attributes: {
    name: 'Sandar Aung',
    title: 'Java Web Developer',
    owner: 'Self Service',
    position: 'Senior Developer',
    department: 'Solution Delivery Department',
    city: 'Yangon',
    salary: '$3500'
  }
},
{
  type: 'employees',
  id: '000003',
  attributes: {
    name: 'Aeindra Aung',
    title: 'Android Developer',
    owner: 'Self Service',
    position: 'Senior Developer',
    department: 'Solution Delivery Department',
    city: 'Yangon',
    salary: '$4000'
  }
},
{
  type: 'employees',
  id: '000004',
  attributes: {
    name: 'Mon Mon',
    title: 'Java Web Developer',
    owner: 'Self Service',
    position: 'Senior Developer',
    department: 'Solution Delivery Department',
    city: 'Yangon',
    salary: '$3500'
  }
},
{
  type: 'employees',
  id: '000005',
  attributes: {
    name: 'Nway Thandar Win',
    title: 'Android Developer',
    owner: 'Self Service',
    position: 'Junior Developer',
    department: 'Solution Delivery Department',
    city: 'Yangon',
    salary: '$3000'
  }
}];
this.get('/employees', function(db, request) {
  if(request.queryParams.name !== undefined) {
    let filteredEmployees = employees.filter(function(i) {
      return i.attributes.name.toLowerCase().indexOf(request.queryParams.name.toLowerCase()) !== -1;
    });
    return {data: filteredEmployees};
  } else if(request.queryParams.position !== undefined) {
    let filteredEmployees = employees.filter(function(i) {
      return i.attributes.position.toLowerCase().indexOf(request.queryParams.position.toLowerCase()) !== -1;
    });
    return {data: filteredEmployees};
  }
  else {
    return {data: employees};
  }
});
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
}
