let moment = require('moment')
let dataofads = [
    {
        "_id": {
          "$oid": "6735ebd5eb8eea47717e8da7"
        },
        "billboard": [
          {
            "billboardid": {
              "$oid": "6735891e1463ad8dcd35a474"
            },
            "billboardname": "Parle Point",
            "slots": [
              {
                "slotname": "(PP)Evening(03:00 PM To 07:00 PM)",
                "starttime": "03:00 PM",
                "starttimeiso": "2024-11-15T18:30:00.000Z",
                "endtimeiso":"2024-11-16T18:30:00.000Z",
                "endtime": "07:00 PM",
                "totaldays": 2,
                "price": 0,
                "totalprice": 0,
                "gst": 18,
                "gstrate": 0,
                "finalprice": 0,
                "description": "ghj",
                "referenceid": "49bfa946-9da5-4824-b333-a6f314769a7f",
                "_id": {
                  "$oid": "67359d5dda1428eed1c934f7"
                }
              },
              {
                "slotname": "(PP)Evening(03:00 PM To 07:00 PM)-2",
                "starttime": "03:00 PM",
                "starttimeiso": "2024-11-15T18:30:00.000Z",
                "endtimeiso":"2024-11-16T18:30:00.000Z",
                "endtime": "07:00 PM",
                "totaldays": 2,
                "price": 0,
                "totalprice": 0,
                "gst": 18,
                "gstrate": 0,
                "finalprice": 0,
                "description": "ghj",
                "referenceid": "49bfa946-9da5-4824-b333-a6f314769a7f",
                "_id": {
                  "$oid": "67359d5dda1428eed1c934f7"
                }
              },
              {
                "slotname": "(PP)Evening(03:00 PM To 07:00 PM)-2",
                "starttime": "03:00 PM",
                "starttimeiso": "2024-11-14T18:30:00.000Z",
                "endtimeiso":"2024-11-18T18:30:00.000Z",
                "endtime": "07:00 PM",
                "totaldays": 2,
                "price": 0,
                "totalprice": 0,
                "gst": 18,
                "gstrate": 0,
                "finalprice": 0,
                "description": "ghj",
                "referenceid": "49bfa946-9da5-4824-b333-a6f314769a7f",
                "_id": {
                  "$oid": "67359d5dda1428eed1c934f7"
                }
              }
            ]
          }
        ]
      },
      {
        "_id": {
          "$oid": "6738e13035deefe359268136"
        },
        "billboard": [
          {
            "billboardid": {
              "$oid": "6735891e1463ad8dcd35a474"
            },
            "billboardname": "Parle Point",
            "slots": [
              {
                "slotname": "(PP)Evening(03:00 PM To 07:00 PM)-3",
                "starttime": "03:00 PM",
                "starttimeiso": "2024-11-13T18:30:00.000Z",
                "endtime": "07:00 PM",
                "endtimeiso": "2024-11-15T18:30:00.000Z",
                "totaldays": 2,
                "price": 0,
                "totalprice": 0,
                "gst": 18,
                "gstrate": 0,
                "finalprice": 0,
                "description": "ghj",
                "referenceid": "49bfa946-9da5-4824-b333-a6f314769a7f",
                "_id": {
                  "$oid": "67359d5dda1428eed1c934f7"
                }
              }
            ]
          }
        ]
      }
]


let reqbody = {
    "billboardcompanyid": "6731d0a469d8b736fa5338d6",
    "billboardcompanyname": "ONE91",
    "mediatype": "67109fe745da329f4a9d5470",
    "mediatypename": "Digital",
    "billboarddata": [
        {
            "adagencyid": "672b14da3eeb5239872248b6",
            "adagencyname": "ABC Limited3",
            "billboardid": "6731d0d669d8b736fa533b2b",
            "billboardname": "product ads",
            "slotid": "6731d0ec69d8b736fa533da2",
            "slotname": "(Bill)s1(04:00 PM To 05:59 PM)",
            "startdate": "2024-11-16T18:30:00.000+00:00",
            "enddate": "2024-11-19T18:30:00.000+00:00",
            "referenceid":"49bfa946-9da5-4824-b333-a6f314769a7f",
            "starttime": "04:00 PM",
            "endtime": "05:59 PM",
            "totaldays": "1",
            "totalfiles": "1",
            "price": "undefined",
            "totalprice": "NaN",
            "sgst": "9",
            "cgst": "9",
            "igst": "18",
            "gstamount": "NaN",
            "finalprice": "NaN",
            "description": "",
            "files": [
                {
                    "url": "public/uploads/files[]-1731327428729-849166310.jpg",
                    "name": "Screenshot 2024-10-29 163402.jpg",
                    "size": "10246",
                    "extension": "image/jpeg"
                },
                {
                    "url": "public/uploads/files[]-1731327428729-849166310.jpg",
                    "name": "Screenshot 2024-10-29 163402.jpg",
                    "size": "10246",
                    "extension": "image/jpeg"
                }
            ]
        },
        {
            "adagencyid": "672b14da3eeb5239872248b6",
            "adagencyname": "ABC Limited3",
            "billboardid": "6731d0d669d8b736fa533b2b",
            "billboardname": "product ads",
            "slotid": "6731d0ec69d8b736fa533da2",
            "slotname": "(Bill)s1(04:00 PM To 05:59 PM)",
            "startdate": "2024-16-18T18:30:00.000+00:00",
            "enddate": "2024-11-20T18:30:00.000+00:00",
            "referenceid":"49bfa946-9da5-4824-b333-a6f3147777777",
            "starttime": "04:00 PM",
            "endtime": "05:59 PM",
            "totaldays": "1",
            "totalfiles": "1",
            "price": "undefined",
            "totalprice": "NaN",
            "sgst": "9",
            "cgst": "9",
            "igst": "18",
            "gstamount": "NaN",
            "finalprice": "NaN",
            "description": "",
            "files": [
                {
                    "url": "public/uploads/files[]-1731327428729-849166310.jpg",
                    "name": "Screenshot 2024-10-29 163402.jpg",
                    "size": "10246",
                    "extension": "image/jpeg"
                },
            ]
        }
    ]
}

// Slot current length is totla files of the lenght 
let errorSlots = [];
const SLOTONELIMIT = 3;

function getDateRangeArray(start, end) {
  console.log('start, end', moment().format("YYYY-MM-DD"), end)
  start = moment(start.split("T")[0]).set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
  console.log('start', start)
  end = moment(end.split("T")[0]).set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
  let dateArray = [];
  let currentDate = moment(start).startOf('day'); // Start from the beginning of the start date
  let endDate = moment(end).startOf('day'); // Consider only the day of the end date

  while (currentDate.isSameOrBefore(endDate, 'day')) {
    dateArray.push(currentDate.format("YYYY-MM-DD"));
    currentDate.add(1, 'days');
  }
  return dateArray;
}


// Function to check and insert exceeding slots in errorSlots
function checkAndInsertErrorSlots(startdate, enddate, filesCount, referenceId) {
  let dateRange = getDateRangeArray(startdate, enddate);
  console.log('startdate, enddate', startdate, enddate)
  console.log('dateRange', dateRange)
  for (let date of dateRange) {
    // Calculate existing slots on this date from `dataofads`
    let existingCount = 0;

    for (let ad of dataofads) {
      for (let billboard of ad.billboard) {
        let matchingSlots = billboard.slots.filter(slot => {
          // Check if the slot specifically includes this date without spanning to other days
          console.log('slot.starttimeiso', slot.starttimeiso)
          let slotStartDate = moment(slot.starttimeiso?.split("T")[0]).startOf('day');
          let slotEndDate = moment(slot.endtimeiso?.split("T")[0]).endOf('day');
          let currentDate = moment(date)?.startOf('day');
          return currentDate.isBetween(slotStartDate, slotEndDate, 'day', '[]') &&
                 slot.referenceid === referenceId;
        });
        existingCount += matchingSlots.length;
      }
    }

    // Add the new slot count from reqbody files to existing count
    let totalSlotCount = existingCount + filesCount;

    // Check if the count exceeds the limit
    if (totalSlotCount > SLOTONELIMIT) {
      errorSlots.push({
        date: date,
        currentSlotCount: totalSlotCount,
        maxSlotLimit: SLOTONELIMIT,
        exceededBy: totalSlotCount - SLOTONELIMIT
      });
    }
  }
}

// Process each slot in the reqbody
for (const req of reqbody.billboarddata) {
  let filesCount = req.files.length;
  checkAndInsertErrorSlots(req.startdate, req.enddate, filesCount, req.referenceid);
}

console.log("Error Slots:", JSON.stringify(errorSlots, null, 2));
