import product1 from '../assests/images/1.avif';

export const serverJson = () => {
    return [
        {
            id: 1,
            image: product1,
            title: 'Optimized Cloud Compute',
            description: 'Virtual machines for more demanding business apps, e.g. production websites, CI/CD, video transcoding, or larger databases.',
            price: "$28.00/mo",
            buttonTitle: "Dedicated vCPU"
        }, {
            id: 2,
            image: product1,
            title: 'Cloud Compute',
            description: 'Virtual machines for apps with bursty performance, e.g. low traffic websites, blogs, CMS, dev/test environments, and small databases.',
            price: "$2.50/mo",
            buttonTitle: "Shared vCPU"
        }, {
            id: 3,
            image: product1,
            title: 'Cloud GPU',
            description: 'Virtual machines with fractional or full NVIDIA GPUs for AI, machine learning, HPC, visual computing and VDI. Also available as Bare Metal.',
            price: "$21.50/mo",
            buttonTitle: "NVIDIA GPU + Dedicated vCPU"
        }, {
            id: 4,
            image: product1,
            title: 'Bare Metal',
            description: 'Single tenant bare metal for apps with the most demanding performance or security requirements.',
            price: "$120.00/mo",
            buttonTitle: "Physical CPU + Optional GPU"
        },
        // Add more product objects here
    ];
}

export const serverTypeJson = () => {
    return [
        {
            id: 1,
            image: product1,
            name: 'General Purpose',
            description: 'Often a good starting point, these VMs provide a typical balance of CPU, RAM, and NVMe SSD resources.'
        }, {
            id: 2,
            image: product1,
            name: 'CPU Optimized',
            description: 'For compute bound applications, these VMs provide proportionally more CPU than they do RAM and NVMe SSD.'
        }, {
            id: 3,
            image: product1,
            name: 'Memory Optimized',
            description: 'For memory bound applications, these VMs provide proportionally more RAM than they do CPU and NVMe SSD.'
        }, {
            id: 4,
            image: product1,
            name: 'Storage Optimized',
            description: 'These VMs provide especially generous amounts of NVMe SSD storage to accompany a typical balance of CPU and RAM.'
        },
        // Add more product objects here
    ];
}

export const serverLocationJson = () => {
    return [
        {
            id: 1,
            image: product1,
            city: 'Delhi',
            country: 'India'
        }, {
            id: 2,
            image: product1,
            city: 'California',
            country: 'USA'
        }, {
            id: 3,
            image: product1,
            city: 'London',
            country: 'UK'
        }, {
            id: 4,
            image: product1,
            city: 'Melbourne',
            country: 'Australia'
        }, {
            id: 5,
            image: product1,
            city: 'Melbourne',
            country: 'Australia'
        }, {
            id: 6,
            image: product1,
            city: 'Melbourne',
            country: 'Australia'
        }, {
            id: 7,
            image: product1,
            city: 'Melbourne',
            country: 'Australia'
        }, {
            id: 8,
            image: product1,
            city: 'Melbourne',
            country: 'Australia'
        }, {
            id: 9,
            image: product1,
            city: 'Melbourne',
            country: 'Australia'
        }, {
            id: 10,
            image: product1,
            city: 'Melbourne',
            country: 'Australia'
        }, {
            id: 11,
            image: product1,
            city: 'Melbourne',
            country: 'Australia'
        }, {
            id: 12,
            image: product1,
            city: 'Melbourne',
            country: 'Australia'
        }, {
            id: 13,
            image: product1,
            city: 'Melbourne',
            country: 'Australia'
        }
        // Add more product objects here
    ];
}

export const serverSizeJson = () => {
    return [
        {
            id: 1,
            priceDetails: {
                storage: "25 GB NCMe",
                monthlyPrice: "$28/month",
                hourlyPrice: "$28/hour"
            },
            specificationDetails: {
                cpu: "14 vCPUs",
                memory: "8 GB Memory",
                bandwidth: "6 TB Bandwidth"
            }
        }, {
            id: 2,
            priceDetails: {
                storage: "255 GB NCMe",
                monthlyPrice: "$29/month",
                hourlyPrice: "$28/hour"
            },
            specificationDetails: {
                cpu: "24 vCPUs",
                memory: "8 GB Memory",
                bandwidth: "6 TB Bandwidth"
            }
        }, {
            id: 3,
            priceDetails: {
                storage: "225 GB NCMe",
                monthlyPrice: "$30/month",
                hourlyPrice: "$28/hour"
            },
            specificationDetails: {
                cpu: "34 vCPUs",
                memory: "8 GB Memory",
                bandwidth: "6 TB Bandwidth"
            }
        }, {
            id: 4,
            priceDetails: {
                storage: "2500 GB NCMe",
                monthlyPrice: "$31/month",
                hourlyPrice: "$28/hour"
            },
            specificationDetails: {
                cpu: "44 vCPUs",
                memory: "8 GB Memory",
                bandwidth: "6 TB Bandwidth"
            }
        }, {
            id: 5,
            priceDetails: {
                storage: "205 GB NCMe",
                monthlyPrice: "$32/month",
                hourlyPrice: "$28/hour"
            },
            specificationDetails: {
                cpu: "54 vCPUs",
                memory: "8 GB Memory",
                bandwidth: "6 TB Bandwidth"
            }
        }, {
            id: 6,
            priceDetails: {
                storage: "250 GB NCMe",
                monthlyPrice: "$33/month",
                hourlyPrice: "$28/hour"
            },
            specificationDetails: {
                cpu: "64 vCPUs",
                memory: "8 GB Memory",
                bandwidth: "6 TB Bandwidth"
            }
        }
        // Add more product objects here
    ];
}