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
            "startdate": "2024-11-13T18:30:00.000+00:00",
            "enddate": "2024-11-16T18:30:00.000+00:00",
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
                }
            ]
        }
    ]
}

let slotData =  [{
    "_id": {
      "$oid": "6735db28fa9a0ed624a251a0"
    },
    "slots": [
      {
        "starttime": "06:00 AM",
        "starttimeiso": {
          "$date": "2024-11-13T19:00:00.000Z"
        },
        "endtime": "11:00 AM",
        "endtimeiso": {
          "$date": "2024-11-14T00:00:00.000Z"
        },
        "status": null,
        "slotname": "Morning",
        "maximumadsperslot": 3,
        "isrequest": 0,
        "isslotinapproval": 1,
        "referenceid": "08df12a5-050b-407f-a858-4120a37b8172",
        "_id": {
          "$oid": "6735db5dfa9a0ed624a25290"
        }
      },
      {
        "starttime": "11:00 AM",
        "starttimeiso": {
          "$date": "2024-11-14T00:00:00.000Z"
        },
        "endtime": "03:00 PM",
        "endtimeiso": {
          "$date": "2024-11-14T04:00:00.000Z"
        },
        "status": null,
        "slotname": "AfterNoon",
        "maximumadsperslot": 4,
        "isrequest": 0,
        "isslotinapproval": 1,
        "referenceid": "352ed2cd-8cf7-469d-be0a-fb35c2a36f5c",
        "_id": {
          "$oid": "6735db5dfa9a0ed624a25291"
        }
      },
      {
        "starttime": "03:00 PM",
        "starttimeiso": {
          "$date": "2024-11-14T04:00:00.000Z"
        },
        "endtime": "07:00 PM",
        "endtimeiso": {
          "$date": "2024-11-14T08:00:00.000Z"
        },
        "status": null,
        "slotname": "Evening",
        "maximumadsperslot": 5,
        "isrequest": 0,
        "isslotinapproval": 1,
        "referenceid": "810886a6-693f-4588-b716-9c2e3c639f6f",
        "_id": {
          "$oid": "6735db5dfa9a0ed624a25292"
        }
      },
      {
        "starttime": "07:00 PM",
        "starttimeiso": {
          "$date": "2024-11-14T08:00:00.000Z"
        },
        "endtime": "11:59 PM",
        "endtimeiso": {
          "$date": "2024-11-14T12:59:00.000Z"
        },
        "status": null,
        "slotname": "NIght",
        "maximumadsperslot": 4,
        "isrequest": 0,
        "isslotinapproval": 1,
        "referenceid": "4ffb5d89-f99f-4034-a913-c63a7ad688ff",
        "_id": {
          "$oid": "6735db5dfa9a0ed624a25293"
        }
      }
    ],
    "billboardid": {
      "$oid": "6735d881ea56e0a271323db1"
    },
    "billboardname": "Shivaji Road",
    "companyid": {
      "$oid": "6735d17dc592cf6c192761e4"
    },
    "companyname": "KG Group",
    "billboardtypeid": {
      "$oid": "67120f67a90671df77bbba93"
    },
    "billboardtype": "Double-sided",
    "billboardsizeid": {
      "$oid": "6715ed66485392c11b6c4fb6"
    },
    "billboardsize": "18x36",
    "height": "18",
    "width": "36",
    "address": "Surat",
    "status": 1,
    "recordinfo": {
      "updateuid": "6735d17dc592cf6c192761e3",
      "updateby": "Abhi",
      "updatedate": {
        "$date": "2024-11-14T11:13:33.341Z"
      }
    },
    "__v": 0
  }]

let adsData = [{
    "_id": {
      "$oid": "6735ebd5eb8eea47717e8da7"
    },
    "seriesid": {
      "$oid": "673331f1cbdd87a2914c1674"
    },
    "seriesno": "OC-006",
    "maxid": 6,
    "mediatype": {
      "$oid": "67109fe745da329f4a9d5470"
    },
    "mediatypename": "Digital",
    "billboardcompanyid": {
      "$oid": "67332c74ac156d276ae248a0"
    },
    "billboardcompanyname": "Our Creations",
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
            "starttimeiso": {
              "$date": "2024-11-13T18:30:00.000Z"
            },
            "endtime": "07:00 PM",
            "endtimeiso": {
              "$date": "2024-11-15T18:30:00.000Z"
            },
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
            "slotname": "(PP)Evening(03:00 PM To 07:00 PM)",
            "starttime": "03:00 PM",
            "starttimeiso": {
              "$date": "2024-11-13T18:30:00.000Z"
            },
            "endtime": "07:00 PM",
            "endtimeiso": {
              "$date": "2024-11-15T18:30:00.000Z"
            },
            "totaldays": 2,
            "price": 0,
            "totalprice": 0,
            "gst": 18,
            "gstrate": 0,
            "finalprice": 0,
            "description": "ghj",
            "referenceid": "49bfa946-9da5-4824-b333-a6f314769a77",
            "_id": {
              "$oid": "67359d5dda1428eed1c934f7"
            }
          }
        ],
        "_id": {
          "$oid": "6735ebd5eb8eea47717e8da8"
        }
      }
    ],
    "totalamount": 0,
    "gstamount": 0,
    "finalamount": 0,
    "startdate": {
      "$date": "2024-11-13T18:30:00.000Z"
    },
    "enddate": {
      "$date": "2024-11-15T18:30:00.000Z"
    },
    "adagencyid": {
      "$oid": "67332e55ac156d276ae24a4f"
    },
    "adagencyname": "Make ME Brand",
    "fileurl": "public/uploads/files[]-1731587027686-749583933.gif",
    "filename": "4.gif",
    "filesize": 129778,
    "fileextension": "image/gif",
    "status": 3,
    "comment": "",
    "statusupdatedbyid": {
      "$oid": "67332c74ac156d276ae2489f"
    },
    "statusupdatedby": "Dhaval",
    "statusupdateddate": {
      "$date": "2024-11-14T12:27:38.450Z"
    },
    "recordinfo": {
      "entryuid": "67332e55ac156d276ae24a4e",
      "entryby": "Tejas",
      "entrydate": {
        "$date": "2024-11-14T12:23:49.343Z"
      },
      "timestamp": 1731587029343,
      "isactive": 1
    },
    "date": {
      "$date": "2024-11-14T12:23:49.397Z"
    },
    "verifyAds": [
      {
        "url": "public/uploads/files[]-1731587258393-40774162.webp",
        "name": "0-500x500.webp",
        "size": 64232,
        "extension": "image/webp",
        "_id": {
          "$oid": "6735ecbaeb8eea47717e9038"
        }
      }
    ],
    "__v": 0,
    "liveremark": "fdf"
  }]

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
                "starttimeiso": {
                  "$date": "2024-11-13T18:30:00.000Z"
                },
                "endtime": "07:00 PM",
                "endtimeiso": {
                  "$date": "2024-11-15T18:30:00.000Z"
                },
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
                "slotname": "(PP)Evening(03:00 PM To 07:00 PM)",
                "starttime": "03:00 PM",
                "starttimeiso": {
                  "$date": "2024-11-13T18:30:00.000Z"
                },
                "endtime": "07:00 PM",
                "endtimeiso": {
                  "$date": "2024-11-15T18:30:00.000Z"
                },
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

let checkMximumLimitOfSlots = async(referenceid, startDate, endDate, slotsCounts,reqBody) => {
    try {
        let errordata = [];
        var slotDetails 
        var data
        var adsresponse
        // Function to calculate the total used slots within the date range
        // const findMaximumLimitCount = async (referenceid, startDate, endDate, billboradid) => {
        //     const pipeline = [
        //         {
        //             $match: {
        //                 "billboard.slots": {
        //                     $elemMatch: {
        //                         referenceid: referenceid,
        //                         billboardid
        //                         starttimeiso: { $gte: new Date(startDate) },
        //                         endtimeiso: { $lte: new Date(endDate) }
        //                     }
        //                 }
        //             }
        //         }
        //     ];
        const findMaximumLimitCount = async (referenceid, startDate, endDate, billboradid) => {
            const pipeline = [
                [
                    {
                        $match: {
                            "billboard.slots.referenceid": referenceid
                        }
                    },
                    {
                        $project: {
                            billboard: {
                                $map: {
                                    input: "$billboard",
                                    as: "billboard",
                                    in: {
                                        billboardid: "$$billboard.billboardid",
                                        billboardname: "$$billboard.billboardname",
                                        slots: {
                                            $filter: {
                                                input: "$$billboard.slots",
                                                as: "slot",
                                                cond: {
                                                    $eq: ["$$slot.referenceid", referenceid]
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                ]
                
            ];
            adsresponse = await this.getmenual("tbladbookingmaster", new _AdBookingMaster(), pipeline);
            // adsresponse = adsresponse.ResultData.slots.filter(item => item.referenceid == referenceid)

            let AllSlots = []
            for (const Ads of adsresponse.ResultData) {
                for (const billboards of Ads.billboard) {
                    for (const slot of billboards.slots) {
                        if(slot.referenceid == referenceid){
                            AllSlots.push(slot)
                        }
                    }
                }
            }
            return adsresponse?.ResultData.length || 0 ;  // Return total used slots count
            // return adsresponse?.length || 0 ;  // Return total used slots count
        }
        // Function to get the actual slot limit
        const findActualLimit = async (referenceid) => {
             data = await this.FindOne("tblslotmaster", new _Slot(), { "slots.referenceid": referenceid });
             slotDetails = data.slots.find(item => item.referenceid === referenceid);
            return slotDetails?.maximumadsperslot || 0; // Return actual limit (default to 0 if not found)
        };

        
        // Calculate the total used slots and actual limit
        const usedSlotsCount = await findMaximumLimitCount(referenceid, startDate, endDate);
        const actualLimit = await findActualLimit(referenceid);
        let daterange = getDateRange(startDate, endDate) 

        let totolslotdata = reqBody.filter(slot => slot.referenceid == referenceid)

            for (const currentdate of daterange) {

              let bodydata =  adsresponse.ResponseData.filter(item => {
                    item.billboard.filter(slot => element == moment(slot.starttimeiso).format('YYYY-MM-DD')) 
                })     
                let slotdata = bodydata?.length       
            }


        if ((usedSlotsCount + slotsCounts) < actualLimit) {
            let errorObject = {
                billboard: data.billboardname,
                slot: slotDetails.slotname,
                maximumadsperslot: slotDetails.maximumadsperslot,
                date: "startdate",
                totaladsbooking: usedSlotsCount + slotsCounts,
                difference: slotsCounts,
                reason: "Exceeded maximum slot limit"
            };
            errordata.push(errorObject); 
            console.log('errordata :>> ', errordata);
            
            return false; 
        } else {
            return true
        }
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}