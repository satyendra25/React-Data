import React, { Component } from 'react'
import "./style.css";
import BlogItem from './BlogItem'
//import image2 from './Image/property.jpg';
// import image3 from './Image/3.png';
// import image4 from './Image/4.png';

export default class Blog extends Component {
    blogList = [
        {
            title: "Blog1",
            description: "React JS ",
            image: "data:image/jpeg;base64,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",
            url: "file:///C:/Users/PC/Desktop/JAVA/JS/Class/revision.html"

        },
        {
            title: "Blog 2",
            description: "React JAVASCRIPT ",
            image: "Image/3.png",
            url: "file:///C:/Users/PC/Desktop/JAVA/JS/Class/revision.html"

        },
        {
            title: "Blog 3",
            description: "React Practice ",
            image: "Image/4.png",
            url: "file:///C:/Users/PC/Desktop/JAVA/JS/Class/revision.html"

        },
        {
            title: "Blog 4",
            description: "React Practice ",
            image: "Image/02.jpg",
            url: "file:///C:/Users/PC/Desktop/JAVA/JS/Class/revision.html"

        },
        {
            title: "Blog 5",
            description: "React Practice by SATEN ",
            image: "Image/01.jpg",
            url: "file:///C:/Users/PC/Desktop/JAVA/JS/Class/revision.html"

        },
    ]
    constructor() {
        super();
        this.state = {
            blogList: this.blogList
        }
    }

    render() {
        return (           
                <div className="container" my-5>
                    <div className="row">
                        {this.state.blogList.map((blogList) => {
                            return (
                                <div className="col-lg-3 blog" key={blogList.url} >
                                    <BlogItem title={blogList.title} description={blogList.description} image={blogList.image} />
                                </div>
                            )
                        })}

                        {/* <div className="col-lg-3">
                        <BlogItem title="Blog-1" description="Hello-1" image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAsQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgEAB//EAEgQAAIBAwEEBgUHBwsFAQAAAAECAwAEEQUSEyExBiJBUWFxFIGRobEHFTJCwdHhIzNSU3Ki0hYkJVRigpKTlLLiVXN0g/A0/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAKBEAAgICAgECBQUAAAAAAAAAAAECEQMSITETBEEiUVJhoRQyQmKx/9oADAMBAAIRAxEAPwCnd+Fe3VGCKuiKvRskE3VdEVGCKpCKixUCCKrVholYqtWKixAqw1aIaKWKrFipWFAgh8K6IaOEVdEXhRYqAdz4V7c0fufCvbrwp2KgDc1ExUwMVcMNOxNC4w1Ew0xMVRMVFhQuMVQMVMDFUDFTsVC9oqraLwpiYqg0XhTsBaYqg0XhTJoqraKiwF26r1HbuvUWAaIqlu6J3dSEdc+x0UDCOpbvwokRVMRUbCoGWOrFjolYqtSGjYVAyxVasVFJDVwipbBQGIqmIqJKhRk4wOJJ5AVkdS6aQ2+rJaWyxyR46xbI2vHI4KO7POmuRUabdCu7qqdN1Wz1EmOBys6jLwOMOo78do8RkUyCCmICMNR3NHlBXNiiwF5h8KiYfCmRjzUGio2ChY0PhVbQ+FM2iqBi8KewmhWYqraLwpo0PhVbQ+FGwqFhiqBipk0NVmGjYdC/dV6jtzXaNx0Ebrwroi8KNEXhUhFXLudGoIsXhViw+FFCKprHRuKgZYfCrkh8KIWOrkiJ7sUboFBvoHWHwrsirFG0kjBUUZLE4AFFMqxozsw2VBJ7a+YdL+ls+o3HoGkoTEGxI4P0OHb/AGuI4dnnTi7DUo6cdMmlkbTNKG2xHHPYP0m8O5fb2CkvRhLa3jmN7c5uJLgM22etJw7u3yq+y0xIVyum27scl2feOXbvzn781C5mEMxs7K1jFyoG+nhi2N0GB4LnmeHE9lb9C6FkF5HpS21hdme6njIbZhfDWfiH7W8M4rWL0x1Wx00ToItVteS3WCrL4SKMYPspfY9HreJB/R0e24zmW8OXJ5HsPdRZ06404NLY2tpCWXYOy7OGODwYbXLw8+IoT+ZLimBt8ouovIzxQ26FwAQVY4xnkM+PuqmTp1rjsubkQDIyYbdGYDwDcM+dB6lplrNqjW9pp0ougis8CytHEcjO0pA5eFWydGriKBpX0u1RFxnbuZZDx8iKvyRXFEeKT5NBB8pSw2sSS2EktxjBJmA2j2cl4+yth0f1gaxYySvFHDPDKYZoUk292+ASu1gcRnB8RWTjhs+jkZNtBbQyRgmSVU63Dmdo8ffWKsOlWoW13fTafP6PFdzGUqI1PhniDgmhq+hLg+4nBr2yDXxx+l2tSDralOP2cL8BQk2u6rN1TqV2SeA/LNS8f3Cz7fucjlXDCO3Hr4Vm+jcmtT9H7b5ujsSqBojLcu5kYqxGTjt4Cuv0d6R3LM1zq9rEW4gxW+SvkTxrByNVD5jmWS0Q4e4hB/bFdMQIBHI0hs+g0sVyJrnVDM3MhrZGz7RwrUQWMdvEEjQDvIULk+QqXMeqQHuK9R268K9RuKiYWpBPCvmw+ULVJFJW0tUDcsZyvrPD3UbD8ol1tEvp8RXHIPy8eXGsfFM6KR9AEfhUxH4VjLf5Q4iwE1i6jPHAH8VEyfKJpqhdm1nZj9UcD7aTxz+QKkakxAcefhmpLMqDrYTzNYm7+ULGPR7JEz+tJY/ZWd13pnfajAYDu4o+1YVI2vMkmsvFkvhG+0a+I1vSbpvBp6vDpjJNcDnJzRfLvPu86yPRV31HfXlyS8z3+S5HPqpWUmuQ/Nh6zUrLpBe6ZEYrKSFVMm86ygnawBn3Cu+MNUcs5K+D6TosbNv3lkkbgp6zE9/fVU1ogvb5scSycvXWB/ljrTHZS8iBPYka1ZB0l19DIx2Zt5jO8gyOH7OKjDieNu3YZciklSo0l+mz0rtQVQqViGccRhPxrRTQp6M2yQRvRxH7JrCr0m6TMQVthnvW1Yn35rra50rnGN3Oe4Cz/wCNaLHUtrIc041RqobZR0sLgc7ZP9lN9WgT5schOZXPjxFfN7nUdfhvfyJuJLsACaTcbSrwwEAAxkDme/h2VZ869KZFAb0ph/4n/GlLE3NSFHJUGjnyiagxv59OhPFpCZSOxc8B9vl51loISq8sU7m0zVLq5luZ7K7kmlbadzA2SfZXvmfUf+n3P+S33V0qjAWBT3U16MWa3fSDT4XXCGdWbHHgp2j8K98y6l9awuQP+0a0fQXSLi31Oe7uoJIRbw9XbGMliBw9WamckolwXJuvk9j/AKNv7X61tqM6Y7l2sj41pmiI+rWa6IOIOkOuwqTszSRzLs8c7QGfLjWymlt1Us0yKAcZJry5Tr3OmuehYyyj6Ea47SW/CgJ9StoZNht7IRzEMLyY9YFF6lrenWCRPNNlJSQrR9YZGM/Gldx0w02NCypcOBkDCYGe7jUqfuaKF+xb872X6u7/ANJJ/DXqTfy/g/qLf5x/hrtXbFofJ5La/t3ZfQy2D2Mv31Fb2VFKvasCeIAYca0N7cAyygnHE8jjFZd7lfSpI4QGcHreeeee2uqUmu2ZxauwrSmudTvfRYCI2JyxkxgDw45NMI9N30phh1KBpBzXcODyz2+FDdDriCGWa7uJESOEhSzDOOfLupxDqlvvwx1G1aMKBhFbaPVI4nZ8aXI3Lng50ftJdSNwbq0tVWNeqVQksVDZ+t2le6qxLZnlpacO9U/hpv0KkWWJypyGDY8R16ToefDtNJxl7Og2S7Q/0i1bUY/RLQorBCY4oWUOD3cAPjXdTRdOuzavFcvIoXP8/dTx8BVHRa5W21F5HDbG6ZeoMkE4waM16YTa2swBw8SnDDB7R9lZa5ba2LuFXRCEWkgYSzTRYbADajPxHfwNeiWwZXLSOCrEANfTttDv59tVvGrHjiupEoxy99PSbv43+A2j9JfbxWMgYylIgGIG1czNtDv50yXo6kls13HGxjaByCtwxGcMAQC2fGlkqLsDGPfWig1Wzh0RY5pmVxbshAjY5JBxy86iUMq5UrBOL4qjFRaFJFDC5uLthvOuizNkqASeJNaDStDs5ZWV4r76OcTTNj3HnXreVTKiDlhj3fVNMLbUrewlD3TMFfqjCluPPs9dePCederhG+Gz0Jwg8LklzRgNI0C6u9UWOW8uGj3pGC55VrtH0eyIaOeCOXCA5YZPZ21PRJbYzrPFIDEXJDZ5UTZW5gZi9xBxXAw57x4V2+sjm48aOfA8dPYUa50XtV1Oxkt12ImcF489VuPHIrR2kSWlncW0eEhikXYXkFHAn30Pf3Vuu4ZpQwgG3KUBbAz5ceVVzaxauxkgZjHJKoyQV/Rz9IV2YIvxLbs5c7W/BkNbuHW/W6j/ACe/iBIHAZGeIxw7c1231FxapGdt41fiu1zBxyqe5kn1tFhkRVzJhZfqnII4dvf3UL0uVbOweeO7UTxuiqEA2toAZJxyHdSzY041Q8Umn2FX7yXV01rDEAIo94GAOGdsDGQCBgkAnuFZRtPuJ9btYLy4MkKuRs8Qvj2+AoWz6Taql9bxi/lIeVFIwvIkAjlTyF865AxOMyEDJ58DVxS1USpN2ab0K2/Rh/1A+6uUTurvu/c/CuVWiFbMN856XcSSmVr/AHofrKhTGO8EgZ/ClNhZQnUWmnuJ5I9sbAjUksC3lwOK1aSdHoGLjo5dHBwXU5x45PGr8aBNMkkljqSngQ0juce1qrRvtmLkvZCE6dFFBdJp1nqhEmGUSoqqWGOJz1vZXItDv3gSV7eVHRcuH558tnNbO2g6OTHJh1BSOJ2jIyj4imDWfR1toi+nBXgQjK2PVgmm4oN2ZTof6TpsLqLe4ZVGBv4igwA3bSoXuGIYSKc8q3Dafo8UDNFrN220eImdn7/7PCkqaJobjb+d348cgYH+2qrjgWwDpN7Gsxdi5PDqleB4iml/qETXMD52fyKjDZzzPhRWhaNYx3xW21uAvjgWSNz7ya90j0tpLgPPrMTqi46xAGc/og/ZWLnUqs1S+CwVdShJ4yY8tr7qtXUoOx2PqP3Utj05X/N3EUg7wCKtjsZdrZCRPx7XpvJFLsi0M/nBHXC++rL/AFCzSxMTBnnaE/RwSOHBRx5Gho7eUEJuB5h1FFHTLzG2tkWBzxWVD7s1y5PVSXSKT90CjUj6SJE2VIRgBISOY7eylXSPXriC32VeGRhwMMYdw2eeccBTg20wOJLGcMe4D7DVfowUkyWtwvhumPvxXNu9lLXk1871ozfRTpR6JCltcI4wx4v1VVeB544n2VoIumVjPLdxOyxxx8Ed8ASDtwc13cW5XLW745flISB8Kji1T6NvECO+P8K2/VzX8TLZMzlz0x3NzdpG+9jkQKp2/t7ef/2TT1des30jZKxzu0hO7RgQDgc+PL44qE76aBm5W3A7yuKU6qNNngKRhQ7cV2MY/CtMfq7daibUi+3vN41vPMYk25CFAYY4Dt7fXUNVliureS1nj2NrHWjUZBDDhmstb3TxuYnIIRgVBUcWHId3fWoslPo0bXkrgBOsu1245V0qMW22glFLoz7aTBBcRTr6S+w4YcjnB8qfRSIdWidJYmG84BZVJ45xwzntohZbee3WbdYYjJjV84wfuqm5ihUbQhjb+9tfdSc4RSbJeRR7NHk/rI/8JrlZz511H9fJ7T99eqP1GMnzxPpJ0fTpxj0WIecCAj3UH8xaQshUw2+1ywIwD7QKMivlnAPpciDuAVfiKMieFuc215vn4VvYwW36M6e/WjSaM98d1IvwarZuitoQGNxqLMB1c3LyD97NObaWNE4sMePCiGmt/wBNSfAilbAxV3oXoe0630sWfrSJGx9pXJpHfaTHMQ01/NOOYBgYj1kMBX0eYI54KfMUBcadby53kCyeDHh+NWmKjG6d0fnvp5PQ71YHUYbcnY4eQ5UNeaCdOZjJcttE8Wzz9or6FYRx2+0IolhzxOBwNZDpRpjXkjSbPl1z8KweOM5/ErLqOogM9unV9N2SO9dr4Gr4bhGIKanDjtBhIPxpXJo+7BDPIuO4jFD+h7P0GZscMnH2UP02L6SaRqULS4/nFtJ/7cVd6FcldpbWNgeRWY4H7tZvT7SaSVEBJOeQXnX1C7TPR4R4O2EwFHlXNlx44NLXv7msMKkrsyS2l2hybVnB54k4fZUHhvlfaS0nC9ySLn27VKRDfRy8FZADw6340zigv3AKNNnHNnPOmvTY5OuSXipXZzeXiNtkXKZ7MbRHrBqSaxfQMwiuboftRMfsNUqb+2YLJcyEnhhpc1pNCtxcZ9MUSE8esSfjTyelhBW5MiEHLozzdIdRUttXLgd7RYP+3hUD0kmVNh7qFlbntxqfspjrM9vaXW6S3GM88ZqVu9tcW5dYoww7AWFVD071uM2KUXF0xFbapbJtGG1spWc/RMG8Zj3AA5p7aX99eIqN0d0uJB9a4jEef7o4+3FM9F0iC6uDh5rckAMY5DyrTx9GYtnA1C7PdlgfcQRWkMbj+6bZNtiKxFpPbNanQ4XQHBaOY7OefLFD3mgaUyuG01YiePBjw99attEa3hb+dBu3igHwxWY1LVYLSQxyiJjkjDOePqxWjd8KNla32xX/ACZ0v9Uf8b/xV6rfnq0/qcHv/hr1LT+n+C8cfq/AcyOGziI9/V51wqW5wKPBa8n5wUYn01qywMQMTnbdPIZq+PYgXLXLg93ZRDc28qFueTer40COTXrgEQy/ChN/qDHAfa86ui7fV8K5B+dNUhM6kmpADaC48Aa5I8rD8omKMi+yoXf0apdk2IryzM+euRn2UufS4IuNxOPI8fdTyXkaQX3/AOg+daJE2GWU1nbMNiC4bH1hGRT2DVkmXZCso7nXFIbL6IppB9Gk8cX2ilkkumH7qB+sQmefOuSQRspXIA86oHOr4udGqIcmDJp9mr7W5Bb9LZphAEh/Ngr6qgedT7KUop8MFJoGubSCZyzqpz3ioKsVqn5GDbPcoAoiShe00lFLgHJt8nY9Q1iQ7Ftp7RAnAZZAPsNPbHT9ZfZebU3jGeKlA3qzwqnSvzQrQQfmxWcmUi9kVLZkMgd9n6WOdfKeleh3Iujc2wOQ2TjPP2ivqDdnlSPUfzjef3UoLkpnyf8ApL+oy/v16voterWkTZ//2Q==" />
                        </div>                  
                         <div className="col-lg-3">
                        <BlogItem title="Blog-3" description="Hello-3" image={image3} />
                         </div>
                             <div className="col-lg-3">
                         <BlogItem title="This is saten baghel" description="Learn React " image={image4} />
                          </div> */}
                    </div>
                </div>

            
        );
    }
}

