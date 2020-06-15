var mark ={
    fullName: 'Mark Houston',
    bills:[124,48,268,180,42],
        calcTips: function(){
            this.tips=[];
            this.totalBill=[];

            for (var i=0; i < this.bills.length; i++){

                var percentage;
                var bill = this.bills[i];

                if (bill < 50){
                    percentage=.2;
                } else if (bill >= 50 && bill < 200) {
                    percentage= .15;
                } else {
                    percentage = .1;
                }

                this.tips[i]= bill * percentage;
                this.totalBill[i]= bill + this.tips[i];
            }
        }
}

mark.calcTips();
console.log(mark);