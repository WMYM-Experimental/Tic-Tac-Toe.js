package com.ttt;

public class Board {
    /*
    -1 means empty
    0 means O
    1 means X
     */

    // 3x3 matrix
    private int[][] board = new int [3][3];

    //Constructor
    public Board() {
    }

    //methods
    private void instructionBoard(){};

    private void display(){};

    private void placePlayer(){};

    private boolean placePCramdomly(){
        return false;
    };

    private boolean isFull(){
        return false;
    };

    //setters and getters
    public int[][] getBoard() {
        return board;
    }

    public void setBoard(int[][] board) {
        this.board = board;
    }
}
