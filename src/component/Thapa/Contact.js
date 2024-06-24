import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    const Wrapper = styled.section`
  
    
    padding: 9rem 0 5rem 0;

    .container {
        margin-top: 6rem;
        text-align: center;
        .contact-form {
            max-width: 50rem;
            margin: auto;

            .contact-inputs{
                display: flex;
                flex-direction: column;
                gap : 3rem;

                input[type="submit"]{
                    cursor : pointer;
                    transition: all .2s;

                    &:hover {
                        background-color: ${({ theme }) => theme.colors.white};
                        border: 1px solid ${({ theme }) => theme.colors.btn};
                        transform: scale(.9);
                    }
                }
            }
        }
    }

    input, textarea{
        max-width: 50rem;
        color: ${({ theme }) => theme.colors.black};
        padding: 1.6rem 2.4rem;
        boder: 1px solid ${({ theme }) => theme.colors.border};
        text-trasform: uppercase;
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        
    }
    input [type='submit']{
        max-width: 16rem;
        margin-top: 2rem;
        background-color: ${({ theme }) => theme.colors.btn};
        color: ${({ theme }) => theme.colors.white};
        padding: 1.4rem 2.2rem;
        border-style: solid;
        border-width: .1rem;
        text-transfrom: uppercase;
        font-size: 1.8rem;
        curson: pointer;
    }
    `;


    return (
        <Wrapper>
            <h2>Contact page </h2>
            <iframe src='' width="100%" height='450' style={{ border: 0 }}></iframe>

            <div className="container">
                <div className="contact-form">
                    <form action="#" method='POST' className='contact-inputs'>
                        <input type="text" name='username' placeholder='username' autoComplete='off' required />
                        <input type="email" name='email' placeholder='email' autoComplete='off' required />
                        <textarea name="message" cols="30" rows="4"></textarea>
                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
        </Wrapper>
    )
}

export default Contact;