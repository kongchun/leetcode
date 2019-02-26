
var addTwoNumbers = function(l1, l2) {
    let remainder = 0;
    let head = {next:null}
    let pnode = head;

    while(l1!=null || l2 != null){
        let p1,p2;
        p1 = l1?l1.val:0;
        p2 = l2?l2.val:0;
   
        let sum = p1+p2+remainder;
        remainder = parseInt(sum/10);
        let out = parseInt(sum%10);
        let node = {val:out};
        pnode.next = node;
        pnode=node;

        
        l1 = l1?l1.next:null;
        l2 = l2?l2.next:null;
    }

    if(remainder>0){
        pnode.next=({val:1,next:null});
    }
    
    return head.next;
};




console.log(addTwoNumbers(  {
    val: 1,
    next:  { val: 8, next:  null } },
    {
        val: 0,
        next: null }
))


