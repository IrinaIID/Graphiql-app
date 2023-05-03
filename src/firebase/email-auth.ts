import { auth, db } from '@/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

export async function logInWithEmailAndPassword(email: string, password: string) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    if (err instanceof Error) {
      toast.warn(err.message);
    }
  }
}

export async function registerWithEmailAndPassword(name: string, email: string, password: string) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, 'users'), {
      uid: user.uid,
      name,
      authProvider: 'local',
      email,
    });
  } catch (err) {
    if (err instanceof Error) {
      toast.warn(err.message);
    }
  }
}

export async function sendPasswordReset(email: string) {
  try {
    await sendPasswordResetEmail(auth, email);
    toast.warn('Password reset link sent!');
  } catch (err) {
    if (err instanceof Error) {
      toast.warn(err.message);
    }
  }
}

export function logOut() {
  signOut(auth);
}
