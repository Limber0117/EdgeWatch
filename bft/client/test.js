// const { uuid } = require('uuidv4');
const { v4: uuid } = require('uuid');
const AccessLedger = require('./accessLedger')

const access = new AccessLedger();
class Test {
    
    async testQueryByExecutor() {
        let executorId = 'server2';
        const result = await access.getTasksByExecutor(executorId);
        // console.log(result);
        console.log(result);
    };

    async getAll() {
        const result = await access.getAllTasks();
        console.log(result);
    }

    testCreate() {
        let d = new Date();
        let n = d.getTime();
        let taskId = uuid()
        let executorId = "server4"
        let publisherId = "server6"
        let startTime = String(n)
        let endTime = String(n+750)
        let deadline = String(5000)
        let baseRewards = String(15)
            
        access.createTask(taskId, executorId, publisherId, startTime, endTime, deadline, baseRewards)
    }

    async testCompRep() {
        let candidates = [{
            id: "server2",
            value : '4444'
        },
        {
            id : "server3",
            value : '3333'
        }
        ]
        
        let executor = await access.chooseExecutor(candidates);
        console.log("decide executor: ", executor);
    }
}


let t = new Test();
// t.testCreate()
for(let i=0;i<5;i++) {
    t.testCreate()
}



// access.getAllTasks();

// let d = new Date();
// let n = d.getTime();
// let executorId = "server2"
// let publisherId = "server1"
// let startTime = String(n)
// let endTime = String(n+500)
// let deadline = String(600)
// let baseRewards = String(20)

// access.createTask(executorId, publisherId, startTime, endTime, deadline, baseRewards)
