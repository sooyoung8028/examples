var obj1 = {
    name: 'obj1',
    func : function() {
        var self = this;
        console.log(self.name);
        return function() {
            console.log(self.name);
        };      
    }
};
var callback = obj1.func();
setTimeout(callback, 1000); 