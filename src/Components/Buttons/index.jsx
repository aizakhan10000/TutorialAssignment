import { Button } from 'react-bootstrap';

export const TestButton = ({buttonname,id}) => {
    return (
        <div className='TestButton'>
           <Button>Test Button</Button>
           <Button variant="primary">Primary</Button>{' '}
           <Button variant="secondary">Secondary</Button>{' '}
        </div>
    );
    }
export const PrimaryButton= () => {
    return (
        <div className='PrimaryButton'>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
        </div>
    );
}

    