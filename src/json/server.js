import product1 from '../assests/images/1.avif';
import optimizedCloudCompute from '../assests/images/optimized_cloud_compute.svg';
import almaIcon from '../assests/images/icon-alma.svg';
import alpinelinuxIcon from '../assests/images/icon-alpinelinux.svg';
import centosIcon from '../assests/images/icon-centos.svg';
import coreosIcon from '../assests/images/icon-coreos.svg';
import debianIcon from '../assests/images/icon-debian.svg';
import flatcarIcon from '../assests/images/icon-flatcar.svg';
import cloudCompute from '../assests/images/cloud_compute.svg';
import cloudGpu from '../assests/images/cloud_gpu.svg';
import bareMetal from '../assests/images/bare_metal.svg';
import generalPurpose from '../assests/images/general_purpose.svg';
import cpuOtpimized from '../assests/images/cpu_optimized.svg';
import memoryOptimized from '../assests/images/memory_optimized.svg';
import storageOptimized from '../assests/images/storage_optimized.svg';

export const serverJson = () => {
    return [
        {
            id: 1,
            image: optimizedCloudCompute,
            title: 'Optimized Cloud Compute',
            description: 'Virtual machines for more demanding business apps, e.g. production websites, CI/CD, video transcoding, or larger databases.',
            price: "$28.00/mo",
            buttonTitle: "Dedicated vCPU"
        }, {
            id: 2,
            image: cloudCompute,
            title: 'Cloud Compute',
            description: 'Virtual machines for apps with bursty performance, e.g. low traffic websites, blogs, CMS, dev/test environments, and small databases.',
            price: "$2.50/mo",
            buttonTitle: "Shared vCPU"
        }, {
            id: 3,
            image: cloudGpu,
            title: 'Cloud GPU',
            description: 'Virtual machines with fractional or full NVIDIA GPUs for AI, machine learning, HPC, visual computing and VDI. Also available as Bare Metal.',
            price: "$21.50/mo",
            buttonTitle: "NVIDIA GPU + Dedicated vCPU"
        }, {
            id: 4,
            image: bareMetal,
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
            image: generalPurpose,
            name: 'General Purpose',
            description: 'Often a good starting point, these VMs provide a typical balance of CPU, RAM, and NVMe SSD resources.'
        }, {
            id: 2,
            image: cpuOtpimized,
            name: 'CPU Optimized',
            description: 'For compute bound applications, these VMs provide proportionally more CPU than they do RAM and NVMe SSD.'
        }, {
            id: 3,
            image: memoryOptimized,
            name: 'Memory Optimized',
            description: 'For memory bound applications, these VMs provide proportionally more RAM than they do CPU and NVMe SSD.'
        }, {
            id: 4,
            image: storageOptimized,
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
            name: 'All Locations',
            details: [
                {
                    image: product1,
                    city: 'Delhi',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Ahmedabad',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Rajkot',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Amreli',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Rajula',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Bopal',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Nikol',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Ghatlodia',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Babra',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Surat',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Vadodara',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'California',
                    country: 'USA'
                },
                {
                    image: product1,
                    city: 'Texas',
                    country: 'USA'
                },
                {
                    image: product1,
                    city: 'Long Beach',
                    country: 'USA'
                },
                {
                    image: product1,
                    city: 'Chicago',
                    country: 'USA'
                }
            ]
        }, {
            id: 2,
            name: 'India',
            details: [
                {
                    image: product1,
                    city: 'Delhi',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Ahmedabad',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Rajkot',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Amreli',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Rajula',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Bopal',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Nikol',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Ghatlodia',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Babra',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Surat',
                    country: 'India'
                },
                {
                    image: product1,
                    city: 'Vadodara',
                    country: 'India'
                }
            ]
        }, {
            id: 3,
            name: 'USA',
            details: [
                {
                    image: product1,
                    city: 'California',
                    country: 'USA'
                },
                {
                    image: product1,
                    city: 'Texas',
                    country: 'USA'
                },
                {
                    image: product1,
                    city: 'Long Beach',
                    country: 'USA'
                },
                {
                    image: product1,
                    city: 'Chicago',
                    country: 'USA'
                }
            ]
        }
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

export const serverImageJson = () => {
    return [
        {
            id: 1,
            imageType: 'Operating System',
            details: [
                {
                    image: almaIcon,
                    name: 'AlmaLinux',
                    version: [
                        "9 x64",
                        "8 x64"
                    ]
                },
                {
                    image: alpinelinuxIcon,
                    name: 'Alpine Linux',
                    version: "Select Version",
                },
                {
                    image: centosIcon,
                    name: 'CentosOS',
                    version: "Select Version",
                }, {
                    image: coreosIcon,
                    name: 'Fedora CoreOS',
                    version: [
                        "9 x64",
                        "8 x64"
                    ]
                },
                {
                    image: debianIcon,
                    name: 'Debian',
                    version: "Select Version",
                },
                {
                    image: flatcarIcon,
                    name: 'Flatcar Container Linux',
                    version: "Select Version",
                }
            ]
        }, {
            id: 2,
            imageType: 'MarketPlace Apps',
            details: [
                {
                    image: product1,
                    name: 'AlmaLinux',
                    version: [
                        "9 x64",
                        "8 x64"
                    ]
                },
                {
                    image: product1,
                    name: 'Alpine Linux',
                    version: "Select Version",
                }
            ]
        }, {
            id: 3,
            imageType: 'Upload ISO',
            details: [
                {
                    image: product1,
                    name: 'AlmaLinux',
                    version: [
                        "9 x64",
                        "8 x64"
                    ]
                },
                {
                    image: product1,
                    name: 'Alpine Linux',
                    version: "Select Version",
                }
            ]
        }
    ];
}