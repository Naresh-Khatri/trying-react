import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
// import "./Dashboard.css";
import { auth, db, logout } from "../firebase";
import {
  doc,
  addDoc,
  query,
  collection,
  getDocs,
  where,
} from "firebase/firestore";
import {
  Box,
  Button,
  Divider,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  SimpleGrid,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { Editor } from "@tinymce/tinymce-react";
function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const titleRef = useRef(null);
  const editorRef = useRef(null);

  const toast = useToast();

  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    fetchUserName();
  }, [user, loading]);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const publishBlog = async () => {
    const payload = {
      title: titleRef.current.value,
      content: editorRef.current.getContent(),
    };
    console.log(payload);
    try {
      const res = await addDoc(collection(db, "blogs"), payload);
      console.log(res);
      toast({
        position: "top",
        title: "Blog published!",
        description: titleRef.current.value,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
      toast({
        position: "top",
        title: "Error",
        description: "Something went wrong",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)">
        <GridItem colSpan={1}>
          <VStack as="aside" bg={"gray.900"} width="400px">
            <Text as="h1" fontSize={25}>
              Dashboard
            </Text>
            <Text as="h1" fontSize={20}>
              Welcome {user?.email}
            </Text>
            <Button bg="red" onClick={logout}>
              Logout
            </Button>
            <Divider />
            <Button bg={"green.400"}> Create a new blog</Button>
          </VStack>
        </GridItem>
        <GridItem colSpan={4}>
          <Box
            as="main"
            bg={"gray.600"}
            width="100%"
            height={"100%"}
            padding={15}
          >
            <Flex justify={"space-around"} py={5}>
              <Text as="h1" fontSize={25} fontWeight="extrabold">
                Create a new post
              </Text>
              <Button bg="green.300" onClick={publishBlog}>
                {" "}
                Publish
              </Button>
            </Flex>
            <Box m={5}>
              <FormLabel>Blog Title</FormLabel>
              <Input variant="outline" ref={titleRef} />
            </Box>
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              apiKey="j3b4s2ajya2zgs4whxrd52dy6239k4mblodx2wn6j8vr6ptv"
              initialValue="<p>This is the initial content of the editor.</p>"
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
          </Box>
        </GridItem>
      </Grid>
      {/* <Grid templateColumns="repeat (3, 1fr)">
        
        <GridItem colSpan={2}>
          
        </GridItem>
      </Grid> */}
    </>
  );
}
export default Dashboard;
