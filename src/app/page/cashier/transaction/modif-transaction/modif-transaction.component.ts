import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-modif-transaction',
  templateUrl: './modif-transaction.component.html',
  styleUrls: ['./modif-transaction.component.css']
})
export class ModifTransactionComponent implements OnInit {

  customerCodes: string[] = ["CUST001", "CUST002", "CUST003"];
  employeeCodes: string[] = ["EMP001", "EMP002", "EMP003"];
  paymentCodes: string[] = ["PAY001", "PAY002", "PAY003"];

  selectedCustomer: any = null;
  selectedEmployee: any = null;
  selectedPayment: any = null;

  customers: any[] = [
    { code: 'CUST001'  },
    { code: 'CUST002' },
    { code: 'CUST003'},
    { code: 'CUST004' },
    { code: 'CUST005' }
  ];

  employees: any[] = [
    { code: 'EMP001'  },
    { code: 'EMP002' },
    { code: 'EMP003'},
    { code: 'EMP004' },
    { code: 'EMP005' }
  ];
  payments: any[] = [
    { code: 'PAY001'  },
    { code: 'PAY002' },
    { code: 'PAY003'},
    { code: 'PAY004' },
    { code: 'PAY005' }
  ];
  perfumes: any[] = [
    { code: 'PRFM001'  },
    { code: 'PRFM002' },
    { code: 'PRFM003'},
    { code: 'PRFM004' },
    { code: 'PRFM005' }
  ];
  services: any[] = [
    { code: 'SRV001'  },
    { code: 'SRV002' },
    { code: 'SRV003'},
    { code: 'SRV004' },
    { code: 'SRV005' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
