
var bow = window.bowinc = function() {};
bow.address= "159.198.74.200";
bow.game={
  name: "spenderbot",
  contract: bow.address,
  network: {
    name:"Pi Network",
    decimals: 7,
    assets: ["native","token","testnet"],
    nodes:[],
    feeRate: 0.01,
    providers:{
      sdk:{
            api_key:"",
            version:[
              "testnet",
              "mainnet"
            ]
          },
      horizon:{
            version:0,
            url: [
              "http://api.testnet.minepi.com",
              "http://api.mainnet.minepi.com"
            ]
          },
      rpc:{
            node:"159.198.74.200",
            port:"40010"
          },
      api:{
        endpoints:{
          ledger:"",
          transaction:"",
          operations:"",
          account:"",
          post:""
        }
      }
    }
  },
  functions:[
    {
      target: "claimClaimableBalance",
      input: [
          "balanceId",
          "amount",
          "destination",
          "callback"
        ],
      traits:[
        {
          name:"noFee",
          mitigate:[
            "feeBump",
            "donateFee",
            "contract_resolve_noFee"
          ],
          flag: 8,
          alarm: true
        },
        {
          name:"invalidDestination",
          mitigate:[
            "validateDestination",
            "contract_resolve_invalidDestination"
          ],
          flag: 9,
          alarm: true
        },
        {
          name:"realease_time_delay",
          mitigate:[
            "timeBond",
            "snooze",
            "contract_resolve_time_delay"
          ],
          flag:7,
          alarm: true
        }
      ],
      discord:[
        "stakeBalance",
        "service_broadcast_tx",
        "watchdog_confirm_pending",
        "contract_discord"
      ],
      output:[
        "destination",
        "contract_resolve_destination"
      ]
    },
    {
      target: "claimAvailableBalance",
      input: [
        "min_amount",
        "amount",
        "destination",
        "callback"
      ],
      traits:[
        {
          name:"dust",
          mitigate:[
            "contract_resolve_dust"
          ],
          flag:2,
          alarm:false
        }
      ],
      discord:[],
      output:[
        "destination",
        "contract_resolve_destination"
      ]
    }
  ],
  accounts:{
    escrow:[],
    fee:[],
    user:[]
  },
  events:{
    title:"genesis",
    inputs:[],
    output:{},
    script: 0x40,
    locktime:0,
    votes:[],
    discord:[],
    traits:[],
    mitigates:[],
    hash:0x80
  },
  utxo:[],
  pending_tx:[],
  resolve:"",
  blocks:[],
  escrow:{
    getAccount: bow.address
  }
}
bow.wallet=[];
bow.escrow={
  getAccount: bow.address
}
bow.accounts=function() {
  this.escrow,this.wallet;
  this.connect = function(sign) {
    s=sign; //key.from(sign);
    bow.wallet.push({/*y:s.getAccountId,x:s.getSeed*/})
    this.escrow=s;this.wallet=s;
  }
  this.connect("key");
}
bow.claimClaimableBalance=function(bid,amount,to,callback) {
  bow.escrow.getAccount
}
console.log(
 "name: "+ bow.game.name +"\nnetwork: "+
  bow.game.network.name +"\ncontract: "+
  bow.game.contract +"\n assets:"+
  bow.game.network.assets[0] +"\n Horizon: "+
  bow.game.network.providers.horizon.url[0]+"\n ops_"+
  bow.game.network.providers.rpc.node+"\n ops_"+
  bow.game.functions.length+"\ntraits: "+
  bow.game.functions[0].traits.length +"\nWwhar next?: "+
  bow.game.events.title
  )
  