import { UserEntity } from '../../core/entities/UserEntity';

export type AuthenticationResult = {
    success: boolean;
    error?: string;
    user?: UserEntity;
};