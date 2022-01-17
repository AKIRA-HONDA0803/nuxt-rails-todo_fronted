import firebase from "@/plugins/firebase";
import axios from "@/plugins/axios";

const authCheck = ({ store, redirect }) => {
  // FirebaseのonAuthStateChangedにより、ログイン状態のユーザーの情報をFirebaseへ確認
  firebase.auth().onAuthStateChanged(async user => {
    // userが存在する＝ログインしていれば
    if (user) {
      const { data } = await axios.get('/v1/users', {
        params: {
          uid: user.uid,
        },
      });
      store.dispatch("auth/setUser", data)
    } else {
      store.dispatch("auth/setUser", null)
    }
  });
};

export default authCheck;