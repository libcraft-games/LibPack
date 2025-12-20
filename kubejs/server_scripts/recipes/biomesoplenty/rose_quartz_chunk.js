ServerEvents.recipes(e => {    
    e.custom({
        "type": "create:crushing",
        "ingredients": [
            {
                item: 'biomesoplenty:rose_quartz_block'
            }
        ],
        "processing_time": 200,
        "results": [
            {
                "id": 'biomesoplenty:rose_quartz_chunk',
                "count": 4
            }
        ]
    })
})