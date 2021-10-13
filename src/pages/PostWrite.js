import React from "react";

import { Grid, Text, Button, Image, Input } from "../components/elements";

const PostWrite = (props) => {
    let is_login = true;

    // 인풋값들 받아서
    // '작성하기' 버튼 누르면
    // createPost dispatch
    // post가 정상적으로 서버에 올라가면
    // success 메세지 출력될 것


    // 로그인 상태라면
    if (is_login) {
        return (
            <Grid is_flex>

                <Grid>
                    {/* 제품 이미지 */}
                    <Grid>
                        <Image shape="rectangle" src="https://thesocialstudies.co/wp-content/uploads/2021/06/placeholder-1-1.jpg" />
                    </Grid>
                </Grid>

                <Grid>
                    {/* 제품 타이틀 */}
                    <Grid is_flex>
                        <Text bold>제품</Text>
                        <Input width="100%" />
                    </Grid>
                    {/* 제품 스펙 */}
                    <Grid is_flex>
                        <Text bold>스펙</Text>
                        <Input width="100%" />
                    </Grid>
                    {/* 제품 추천 공간 */}
                    <Grid is_flex>
                        <Text bold>추천 공간</Text>
                        <Input width="100%" />
                    </Grid>
                    {/* 제품 설명 */}
                    <Grid is_flex>
                        <Text bold>제품 설명</Text>
                        <Input width="100%" />
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    // 로그인 상태가 아니라면
    else {
        return (
            <Grid margin="100px 0px" padding="16px" center>
                <Text size="32px" bold>
                    앗! 잠깐!
                </Text>
                <Text size="16px">
                    로그인 후에만 글을 쓸 수 있어요!
                </Text>
                <Button
                    _onClick={() => {
                        // history.replace("/login");
                    }}
                >
                    로그인 하러가기
                </Button>
            </Grid>
        );
    }
};

export default PostWrite;

