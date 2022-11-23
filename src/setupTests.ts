// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => (jest.fn())
}));

jest.mock('react-query', () => ({
    ...jest.requireActual('react-query'),
    useMutation: (func: () => void) => ({
        mutateAsync: jest.fn(() => {
            func();
            Promise.resolve({});
        }),
    }),
    useQuery: (dep: string[]) => {
        if (dep[0] === 'usersData') {
            return {
                data: [
                    {
                        id: 1,
                        fullName: 'test',
                    },
                    {
                        id: 2,
                        fullName: 'test2',
                        isActive: true,
                    }
                ]
            }
        }
    },
}));

jest.mock('./store', () => jest.fn(() => ({
    user: {
        username: 'Test',
        role: (globalThis as any).userRole || 'user',
    },
    removeUser: jest.fn(),
})));

jest.mock('./api', jest.fn(() => ({
    signIn: jest.fn(() => Promise.resolve({})),
})));
